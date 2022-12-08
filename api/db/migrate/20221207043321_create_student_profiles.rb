class CreateStudentProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :student_profiles do |t|
      t.references :student,         null:false
      t.string     :last_name,       null:false
      t.string     :first_name,      null:false
      t.integer    :gender,          null:false
      t.integer    :birthplace,      null:false
      t.string     :university_name, null:false
      t.integer    :grade,           null:false
      t.string     :faculty,         null:false
      t.string     :depertment,      null:false


      t.timestamps
    end
  end
end
